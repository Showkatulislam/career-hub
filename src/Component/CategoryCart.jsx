const CategoryCart = ({category}) => {
    const {img,title,text}=category
    return (
        <div className="
        p-4
        space-y-4 
        bg-slate-200
        rounded-lg
        ">
           <img src={img} alt="" srcSet="" />
           <div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p>{text}</p>
           </div>
        </div>
    );
};

export default CategoryCart;