import React, { useState, useEffect } from "react";
import axios from "axios";

function RealTimeData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://api.example.com/data", {
        headers: { "Cache-Control": "no-cache" },
        responseType: "stream",
      });
      result.data.on("data", (newData) => {
        setData((prevData) => [...prevData, newData]);
      });
      result.data.on("end", () => {
        fetchData();
      });
    };

    fetchData();

    return () => {};
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

let data = [];

app.get("/data", async (req, res) => {
  const newData = await waitForNewData();
  res.json(newData);
});

function waitForNewData() {
  return new Promise((resolve) => {
    if (data.length > 0) {
      resolve(data);
    } else {
      const timeoutId = setTimeout(() => {
        resolve(waitForNewData());
      }, 30000); // Wait 30 seconds for new data

      dataListeners.push(() => {
        clearTimeout(timeoutId);
        resolve(data);
      });
    }
  });
}

function emitNewData() {
  dataListeners.forEach((listener) => {
    listener();
  });
  dataListeners = [];
}

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// Periodically update the data
setInterval(() => {
  data.push({ id: data.length + 1, name: `Item ${data.length + 1}` });
  emitNewData();
}, 5000); // Emit new data every 5 seconds

const express = require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const intervalId = setInterval(() => {
    const data = { id: Date.now(), name: `Item ${Date.now()}` };
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 5000);

  req.on("close", () => {
    clearInterval(intervalId);
    res.end();
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("/sse");

    eventSource.addEventListener("message", (event) => {
      const newData = JSON.parse(event.data);
      setData((prevData) => [...prevData, newData]);
    });

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

//----------------------------------------

import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // Replace with your server URL

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("data", (newData) => {
      setData((prevData) => [...prevData, newData]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleClick = () => {
    socket.emit("fetchData");
  };

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Fetch Data</button>
    </div>
  );
}

export default App;

//--------------------------------------------------------------------------

const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = 3000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on("fetchData", () => {
    const data = { id: Date.now(), name: `Item ${Date.now()}` };
    io.emit("data", data);
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
