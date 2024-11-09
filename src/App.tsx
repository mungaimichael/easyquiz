import AppRouter from "./router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const queryCl = new QueryClient();
export default  function App() {
    return (
        <QueryClientProvider client={queryCl}>
        <div className="bg-background min-h-screen flex flex-col px-3 ">
            <AppRouter/>
        </div>
    </QueryClientProvider>
    )
}