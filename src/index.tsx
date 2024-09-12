import { Footer } from "./components/Footer.tsx";
import { Header } from "./components/Header.tsx";

let posts: number[] = [];
for (let i = 0; i < 3; i++) {
  posts[i] = i;
}

export default function App() {
  return (
    <div>
      <Header />
      <main className="py-16">
        <div className="max-w-[90%] mx-auto w-full py-16">
          {posts.map((_a: any, i: number) => {
            return (
              <div className="py-8 px-16 bg-gray-200 mb-4">
                <h2>Item {i}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat officiis sit amet dignissimos autem cum vero nesciunt
                  ad velit magni.
                </p>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
