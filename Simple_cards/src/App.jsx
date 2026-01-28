import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Vaishu"
        age={21}
        img="https://images.unsplash.com/photo-1769096913783-641f762d4a7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Rohan"
        age={25}
        img="https://images.unsplash.com/photo-1655883870436-36c9c20719aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Riddhi"
        age={22}
        img="https://media.istockphoto.com/id/2225683356/photo/woman-photographing-in-sunflower-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=u2E1YYFyruZ4K8_JPBve_ndRI9JxUbdm-V39N89VvWM="
      />
      <Card
        user="Sanket"
        age={25}
        img="https://media.istockphoto.com/id/1200028616/photo/woman-taking-a-picture-with-a-dslr-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=PWI3Twu9IfFvcR791-648qXrKv_HPLNV9V7KMU3QyeU="
      />
      <Card
        user="Vidhi"
        age={24}
        img="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8"
      />
    </div>
  );
};

export default App;
