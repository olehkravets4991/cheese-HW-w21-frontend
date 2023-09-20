import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const cheeses = useLoaderData()

    // map over the todos and create a Post component for each todo
    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create cheese</h2>
        <Form method="post" action="/create">
            <input type="text" name="subject" placeholder="Subject"/>
            <input type="text" name="details" placeholder="Details"/>
            <button>Create a new cheese</button>
        </Form>
    </div>
    {cheeses.map((cheese) => <Post key={cheese.id} post={cheese}/>)}
    </>

}

export default Index;