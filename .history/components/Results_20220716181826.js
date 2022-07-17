import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}