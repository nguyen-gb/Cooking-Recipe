export default function Header() {
  return (
    <div className="bg-secondary">
      <div className="container py-20 flex flex-row flex-wrap gap-8">
        <input
          type="text"
          className="flex-1 bg-white pl-4 py-4"
          placeholder="Search recipe"
        />
        <select className="flex-1 bg-white pl-4 py-4">
          <option selected>Category</option>
          <option value="US">Desert</option>
          <option value="CA">Asian</option>
          <option value="FR">Spicy</option>
        </select>
        <select className="flex-1 bg-white pl-4 py-4">
          <option selected>Tags</option>
          <option value="US">abc</option>
          <option value="CA">123</option>
        </select>
        <button className="bg-primary text-white font-semibold py-4 px-12">
          Search
        </button>
      </div>
    </div>
  );
}
