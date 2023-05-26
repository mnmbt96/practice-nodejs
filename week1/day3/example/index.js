import EventEmitter from "events";
import dotenv from "dotenv";

const eventEmitter = new EventEmitter();
dotenv.config();

function subsMessage(isSubscribed) {
  if (isSubscribed) {
    console.log("Thank you for subscribe!");
  } else {
    console.log("Please subscribe");
  }
}
eventEmitter.on("events", (data) => {
  subsMessage(data.isSubscribed);
});
eventEmitter.emit("events", { name: "John", isSubscribed: true });

// to hide API key or any credentials
console.log(process.env.API_KEY);
