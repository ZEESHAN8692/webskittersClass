const Blog = ({ params }: { params: { slug: string[] } }) => {
  console.log(params.slug);
  const segments = params.slug;
  if (segments?.length === 0) {
    return <h1>Welcome to the Blog</h1>;
  }
  return (
    <>
      {/* <h1>Main Blog Page </h1> */}
      <ul>
        {segments?.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
