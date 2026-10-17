import { village , cards} from "../../database/db";

export function HomePage() {
  return (
    <div className="fade-up w-300 overflow-hidden">
      <div className="relative h-64 overflow-hidden lg:h-80 object-fit">
        <img
          src="https://images.pexels.com/photos/5264382/pexels-photo-5264382.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Mashpur countryside"
          className="h-full w-full object-cover py-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gp-deeper/80 via-gp-deeper/20 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white lg:left-10">
          <p className="text-sm font-medium text-gold">ग्राम पंचायत मशपुर</p>
          <h3 className="text-3xl font-bold">Welcome to Maspur</h3>
          <p className="text-sm text-emerald-50/90">
            District {village.district}, {village.state}
          </p>
        </div>
      </div>

      {/* Quick stats — just one map over the cards array above */}
      <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <card.icon className="h-6 w-6 text-emerald-700" />
            <p className="mt-3 text-2xl font-bold text-emerald-950">{card.value}</p>
            <p className="text-sm font-semibold text-emerald-900/80">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 p-4 lg:grid-cols-3 lg:p-8">
        <article className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm lg:col-span-2 ml-37 border-1 w-full">
          <h4 className="text-lg font-semibold text-emerald-950">Our village</h4>
          <p className="mt-3 text-sm leading-relaxed text-emerald-900/75">
            Maspur sits on the green belt of Kanker, where paddy fields meet
            sal forest. The Gram Panchayat looks after drinking water, rural
            roads, MGNREGA works, and the school–anganwadi network for twelve
            wards. Sarpanch {village.sarpanch} leads with the ward panchs and
            Sachiv desk from the Panchayat Bhavan.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-emerald-900/75">
            Established in {village.established}, the panchayat now serves{" "}
            {village.households} households and a population of {village.population}.
          </p>
        </article>
      </div>
    </div>
  );
}

export default HomePage;
