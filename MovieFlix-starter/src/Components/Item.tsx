// import { NavLink } from "react-router-dom";
import { IMovie } from "../Models/IMovie";
import { IShow } from "../Models/IShow";
import Card from "./UI/Card";
// import Image from "./UI/Image";
import ImageLink from "./UI/ImageLink";

type ItemProps = {
  item: IMovie | IShow;
};

function isMovie(media: IMovie | IShow): media is IMovie {
  return (media as IMovie).title !== undefined;
}

const Item = ({ item }: ItemProps) => {
  if (isMovie(item)) {
    const media = item as IMovie; //Tvingande typ konvertering
    //this section was moved from ItemsList.tsx
    //Det är en film så gör vi detta
    return (
      <Card>
        {/* skickats till ImageLink.tsx
        <NavLink to={`/movies/${media.id}`}>
          <Image imageSrc={media.poster_path} altText={media.title} />
        </NavLink> */}

        <ImageLink
          href={`/movies/${media.id}`}
          imageSrc={media.poster_path}
          altText={media.title}
        />
        <div className="card-body">
          <h5>{media.title}</h5>
          <small className="text-muted">{media.release_date}</small>
        </div>
      </Card>
    );
  }

  const media = item as IShow; //Tvingande typ konvertering
  //Om det är tv-serie så gör vi detta
  return (
    <Card>
      {/* <NavLink to={`/shows/${item.id}`}> */}
      {/* <Image imageSrc={media.poster_path} altText={media.name} /> */}
      <ImageLink
        href={`/shows/${media.id}`}
        imageSrc={media.poster_path}
        altText={media.name}
      />
      {/* </NavLink> */}
      <div className="card-body">
        <h5>{media.name}</h5>
        <small className="text-muted">{media.first_air_date}</small>
      </div>
    </Card>
  );
};
export default Item;
