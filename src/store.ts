
import createRootReducer from "./rootReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = createRootReducer();
const middleware = [...getDefaultMiddleware()];
const excludeLogger = ["test", "production"];
const logger = !excludeLogger.includes(
  process.env.NODE_ENV || ""
);

if (logger) {
  const logger = createLogger({
    level: "info",
    collapsed: true,
  });
  middleware.push(logger);
}
export const configuredStore = (initialState?: RootState) => {
    return configureStore({
      reducer: rootReducer,
      middleware: middleware,
      preloadedState: initialState,
    });
};
  export type Store = ReturnType<typeof configuredStore>;