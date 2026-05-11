import LikeButton from "./like-button";

// const app = document.getElementById("app");
function Header(props){
    return <h1>{props.title ? props.title : "Default Title!"}</h1>
}
export default function HomePage(){
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    // const [likes, setLikes] = React.useState(0);
    // function handleClick(){
    //     setLikes(likes + 1)
    // }
    return <div>
        <Header title="Title 1"/>
        <ul>
            {
                names.map((name) =>
                    <li key={name}>{name}</li>
                )
            }
        </ul>
        <LikeButton />
        <Header title="Title 2"/>
    </div>;
}
// const root = ReactDOM.createRoot(app);
// root.render(<HomePage />);
