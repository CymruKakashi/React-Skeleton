
import createRootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = createRootReducer();
const excludeLogger = ["test", "production"];
const logger = !excludeLogger.includes(
  process.env.NODE_ENV || ""
);

export const configuredStore = (initialState?: RootState) => {
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => {
        if (logger) {
          const logger = createLogger({
            level: "info",
            collapsed: true,
          });
          return getDefaultMiddleware().concat(logger);
        }
        return getDefaultMiddleware();
      },
      preloadedState: initialState,
    });
};
  export type Store = ReturnType<typeof configuredStore>;