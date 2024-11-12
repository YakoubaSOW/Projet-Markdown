import './assets/AsideContainer.css';

/*
* Commons container for the aside elements
* */

function AsideContainer({ children }) {
    return (
        <>
            <div className={"asideContainer"}>
                {children}
            </div>
        </>
    );
}

export default AsideContainer;
