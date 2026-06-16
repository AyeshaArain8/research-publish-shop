const filters = [
  {
    title: "Categories",
    options: [
      ["Adventure", 12],
      ["Classic Fiction", 8],
      ["Fantasy", 15],
      ["Modern Fiction", 10],
      ["Romance", 20],
      ["Thriller and Suspense", 9],
    ],
  },
  {
    title: "Years",
    options: [["2020"], ["2021"], ["2022"]],
  },
  {
    title: "Brands",
    options: [["Classic"], ["Delta"], ["Elyon"], ["Epsilon"], ["Vintage"], ["Vega"]],
  },
];

const fullStar = "\u2605";
const emptyStar = "\u2606";

function FilterCard({ title, children }) {
  return (
    <div className="rounded-[18px] bg-white p-5 shadow-[0_8px_24px_rgba(0,0,0,.20)]">
      <h3 className="border-b border-[#df4aa2] pb-3 text-[22px] font-black">
        {title}
      </h3>
      <div className="pt-4">{children}</div>
    </div>
  );
}

function Checkbox() {
  return <span className="h-4 w-4 shrink-0 border border-[#5b6675]" />;
}

export default function Filters() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-4 lg:self-start">
      <FilterCard title="Categories">
        <ul className="space-y-3">
          {filters[0].options.map(([name, count]) => (
            <li className="flex items-center gap-3 text-sm text-[#344054]" key={name}>
              <Checkbox />
              <span className="flex-1">{name}</span>
              <span className="text-[#98a2b3]">({count})</span>
            </li>
          ))}
        </ul>
      </FilterCard>

      <FilterCard title="Price">
        <div className="py-3">
          <div className="h-2 rounded-full bg-[#e3e6ec]" />
          <div className="mt-4 flex justify-between text-sm text-[#475467]">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>
      </FilterCard>

      {filters.slice(1).map((group) => (
        <FilterCard title={group.title} key={group.title}>
          <ul className="space-y-3">
            {group.options.map(([name]) => (
              <li className="flex items-center gap-3 text-sm text-[#344054]" key={name}>
                <Checkbox />
                {name}
              </li>
            ))}
          </ul>
        </FilterCard>
      ))}

      <FilterCard title="Ratings">
        <ul className="space-y-2">
          {[5, 4, 3, 2].map((stars) => (
            <li className="flex items-center gap-2 text-sm" key={stars}>
              <Checkbox />
              <span className="text-[#ffb000]">
                {fullStar.repeat(stars)}
                <span className="text-[#cbd5e1]">{emptyStar.repeat(5 - stars)}</span>
              </span>
              <span className="ml-auto text-xs text-[#98a2b3]">(0)</span>
            </li>
          ))}
        </ul>
      </FilterCard>
    </aside>
  );
}
