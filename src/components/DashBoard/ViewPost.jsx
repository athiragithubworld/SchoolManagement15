// Created bt Athira


export default function ViewPost({post}) {
  return (
    <div className="flex flex-col h-[164px] w-full px-4 pt-4 font-bold text-black bg-white rounded-[20px] shadow-containerShadow leading-[120%]  ">
      <div className="text-customtext">View post</div>

      {/* Container for posts */}
      <div className="overflow-y-auto scrollbarnone">
        {post.length !== 0 &&
          post.map((post) => (
            <div
              className="flex gap-2.5 p-2.5 mt-2 text-sm rounded"
              key={post.id}
            >
              <img
                // loading="lazy"
                src={post.image}
                className="flex shrink-0 w-[61.54px] h-[61.54px] rounded-full"
              />

              {/* Post content */}
              <div className="my-auto">{post.content}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
