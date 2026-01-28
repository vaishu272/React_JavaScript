import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Software Development Engineer",
      tag1: "Full-time",
      tag2: "Junior Level",
      pay: "$50/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Ahmedabad, India",
    },
    {
      brandLogo:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Surat, India",
    },
    {
      brandLogo:
        "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Backend Developer",
      tag1: "Full-time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "2 months ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Senior Level",
      pay: "$85/hour",
      location: "Delhi, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (ele, idx) {
        return (
          <div key={idx}>
            <Card
              company={ele.companyName}
              post={ele.post}
              tag1={ele.tag1}
              tag2={ele.tag2}
              pay={ele.pay}
              brandLogo={ele.brandLogo}
              datePosted={ele.datePosted}
              location={ele.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
