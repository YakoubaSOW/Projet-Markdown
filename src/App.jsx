import './App.css';
import EditMarkdown from "./components/EditMarkdown.jsx";
import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom';
import MainPage from "./components/MainPage.jsx";
import CitationDuJour from "./components/CitationDuJour.jsx";
import DateAndTime from "./components/DateAndTime.jsx";
import RecetteDuJour from "./components/RecetteDuJour.jsx";
import MocktailDuJour from "./components/MocktailDuJour.jsx";
import AsideContainer from "./components/AsideContainer.jsx";
import EvenementHistorique from "./components/EvenementHistorique.jsx";
import BlagueDuJour from "./components/BlagueDuJour.jsx";

function App() {

    const router = createBrowserRouter(
        [
            {
                path: "/EditMarkdown/:fileId",
                element: <EditMarkdown/>,
                errorElement: <div>404 Not Found</div>
            },
            {
                path: "/",
                element: <MainPage/>,
                errorElement: <div>404 Not Found</div>
            }
        ]
    );

    return (
        <>
            <section className={"container"}>
                <aside className={"sideBar"}>
                    <AsideContainer>
                        <CitationDuJour/>
                    </AsideContainer>
                    <AsideContainer>
                        <RecetteDuJour/>
                    </AsideContainer>
                    <AsideContainer>
                        <EvenementHistorique/>
                    </AsideContainer>
                </aside>
                <main>
                    <RouterProvider router={router}/>
                </main>
                <aside className={"sideBar"}>
                    <AsideContainer>
                        <DateAndTime/>
                    </AsideContainer>
                    <AsideContainer>
                        <MocktailDuJour/>
                    </AsideContainer>
                    <AsideContainer>
                        <BlagueDuJour/>
                    </AsideContainer>
                </aside>
            </section>
        </>

    );
}

export default App;