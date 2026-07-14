import journalData from "../data/journalData";
import JournalCard from "../components/JournalCard";
import FeaturedArticle from "../components/FeaturedArticle";
import SEO from "../components/SEO";

function Journal() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-14 lg:px-24 py-12 sm:py-16 transition-colors duration-500">
      <SEO
        title="Journal"
        description="SpiceRoot Journal — traditional spice wisdom, cooking tips, Kolhapur food culture, and stories behind our family masala recipes."
        keywords="SpiceRoot journal, spice tips, Kolhapur food culture, Maharashtrian recipes"
        url="/journal"
      />
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-forest dark:text-cream">SpiceRoot Journal</h1>
        <p className="text-forest dark:text-cream/60 font-dm mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Traditional spice wisdom, cooking tips, Kolhapur food culture, and the stories behind our family recipes.
        </p>
      </div>
      <FeaturedArticle />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
        {journalData.map((article) => (
          <JournalCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Journal;
