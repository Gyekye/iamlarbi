import { ChakraProvider } from "@chakra-ui/react"
import "@fontsource/nunito"
import "@fontsource/nunito/300.css"
import "@fontsource/nunito/500.css"
import "@fontsource/nunito/600.css"
import "@fontsource/nunito/700.css"
import "@fontsource/nunito/800.css"
import "@fontsource/work-sans"
import "@fontsource/work-sans/300.css"
import "@fontsource/work-sans/500.css"
import "@fontsource/work-sans/600.css"
import "@fontsource/work-sans/700.css"
import "@fontsource/work-sans/800.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "react-vertical-timeline-component/style.min.css"
import "swiper/css"
import "swiper/css/navigation"
import App from "./App"
import theme from "./theme/theme"
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </BrowserRouter>
)
