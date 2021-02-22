export default function Home(props) {
  const { picture, name, className } = props;
  return (
    <div className="home">
      <img className={className} src={picture} alt={name} />
    </div>
  );
}
