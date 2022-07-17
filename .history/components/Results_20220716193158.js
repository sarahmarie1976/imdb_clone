import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="bg-gray-700">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}