import Slider from "../Slider";
import Filters from "./Filters";

const books = [
  ["The Breaking Point", "Dr. Ben Aillin", "Health & Fitness", "Print", "11.99"],
  ["The Mystery of Turtle Island", "Terre J. Peterson", "Children's Fiction", "Print", "15.99"],
  ["RainbowChaser", "E.J. Hultana", "Biography", "eBook", "2.99"],
  ["Book of Long-Term Care", "Carter Gray", "Education", "Print", "10.99"],
  ["Hard Conversations", "BJ Communicates", "Fiction", "Print", "10.00"],
  ["Thunder in the Skies", "James F. Casey", "History", "Print", "65.00"],
  ["That All May Be One", "Martha Malinski", "Religion", "eBook", "3.99"],
  ["The Living Language of Water", "Veda Austin", "Mind & Spirit", "Print", "65.00"],
  ["Little Beavers Go to Bed", "Alex Adams", "Education", "Print", "6.00"],
  ["Leading With A Servant's Heart", "Eric Cooper", "Self-Help", "eBook", "3.99"],
  ["Reclaiming the Fire", "Audrey McGuckin", "Business", "eBook", "9.99"],
  ["I Am Boricua", "Samantha Garcia", "Children's Fiction", "Print", "22.99"],
  ["Stories of the Good Old Days", "Rodney H. Chow", "Fiction", "Print", "17.00"],
  ["The Great Race", "Valerie Tseng", "Children's Fiction", "Print", "15.99"],
  ["Making a Difference", "Cecil Nazareth", "Biography", "Print", "30.00"],
  ["Once Upon the Sun and Sea", "Jo Tiongson-Perez", "Children's Fiction", "Print", "30.75"],
];

const sections = [
  "New Releases",
  "Best Sellers",
  "Celebrating Asian-American & Pacific Islander Heritage Month",
  "National Nurses Week",
  "Spring Cleaning",
  "Earth Day",
];

function makeBooks(offset) {
  return books.slice(offset).concat(books.slice(0, offset)).map(([title, author, genre, format, price]) => ({ title, author, genre, format, price }));
}

export default function ShopContent() {
  return (
    <section className="mx-auto grid max-w-[1670px] gap-8 px-4 py-9 md:px-8 lg:grid-cols-[339px_minmax(0,1fr)] xl:gap-[58px] xl:px-[125px]">
      <Filters />
      <div className="min-w-0">
        {sections.map((section, index) => <Slider books={makeBooks(index * 2)} id={`row-${index}`} key={section} title={section} />)}
      </div>
    </section>
  );
}
