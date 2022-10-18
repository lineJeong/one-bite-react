function DiaryItem({ id, author, content, emotion, created_date }) {
  return (
    <div className="DiaryItem" key={id}>
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default DiaryItem;
