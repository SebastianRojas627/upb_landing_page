export const Title = ({ title, subtititle }) => {
  return (
    <div className="section-title">
      <h2>
        {title}
        <span>{subtititle}</span>
      </h2>
    </div>
  );
};
