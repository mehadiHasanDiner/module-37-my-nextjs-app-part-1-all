import Link from "next/link";

export const metadata = {
  title: "Home page | NextJS website",
  description: "This is the homepage",
};
const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: { revalidate: 30 },
  });
  const shoes = await res.json();
  // console.log(shoes);
  // throw new Error();
  // throw new Error("Error from home page");
  return (
    <div className="text-center">
      <h1 className="text-3xl text-center">Welcome to Next JS Home Page</h1>
      <div className="grid grid-cols-3 gap-4 p-5 justify-between">
        {shoes.slice(0, 3).map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Buy Now</button>
                <button className="btn btn-outline btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/all-shoes">
        <button className="btn btn-outline btn-primary">See More</button>
      </Link>
    </div>
  );
};

export default HomePage;
