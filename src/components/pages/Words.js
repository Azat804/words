import { useParams, Outlet, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "./words.css";
function Words() {
  const params = useParams();
  return (
    <MainLayout>
      <div className="words">
        {!params.id ? (
          <div className="words-list">
            {words.map((item) => (
              <div key={item}>
                <Link className="word" to={`/word/${item}`}>
                  {item}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </MainLayout>
  );
}
export const words = [
  "apple",
  "table",
  "paper",
  "phone",
  "screen",
  "key",
  "battery",
  "mouse",
  "notebook",
  "car",
  "bag",
  "pen",
  "pencil",
  "pizza",
  "cat",
  "dog",
  "number",
  "book",
  "door",
  "printer",
  "gate",
  "cheese",
  "sky",
  "word",
  "house",
  "name",
  "field",
  "window",
  "shop",
  "song",
];
export default Words;
