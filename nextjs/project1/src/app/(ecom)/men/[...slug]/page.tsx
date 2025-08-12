import React from "react";

const Men = ({ params }: { params: { slug: string[] } }) => {
  console.log(params.slug);
  return (
    <>
      <ul>
        {params.slug.map((slug, i) => (
          <li key={i}>{slug}</li>
        ))}
      </ul>
    </>
  );
};

export default Men;
