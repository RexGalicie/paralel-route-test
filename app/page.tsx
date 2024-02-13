import Link from "next/link";

export default function Page() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);
  let products = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <>
      <div>
        <p style={{ textAlign: "center" }}>MODAL Parallel Routes</p>
        <section className="cards-container">
          {photos.map((id) => (
            <Link className="card" key={id} href={`/photos/${id}`} passHref>
              {id}
            </Link>
          ))}
        </section>
      </div>
      <div>
        <p style={{ textAlign: "center" }}>NO MODAL Intercept Routes</p>
        <section className="cards-container">
          {products.map((id) => (
            <Link className="card" key={id} href={`/product/${id}`} passHref>
              {id}
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}
