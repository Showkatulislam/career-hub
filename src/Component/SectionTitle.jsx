
const SectionTitle = ({title,subTitle}) => {
    return (
        <div
        className="
            my-5
            text-center
            "
      >
        <h1
          className="
                text-3xl font-semibold py-3"
        >
         {title}
        </h1>
        <p>
         {subTitle}
        </p>
      </div>
    );
};

export default SectionTitle;