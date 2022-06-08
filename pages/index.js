import Image from "next/image";

export default function Profile({ results }) {
  return (
    <>
      {results.map((curElem, index) => {
        return (
          <div className="profile" key={index}>
            <Image
              src={curElem.picture.medium}
              width="100"
              height="100"
              layout="fixed"
              className="profile--img"
            />
            <div className="profile--right">
              <div className="profile--name">{`${curElem.name.first} ${curElem.name.last} (${curElem.login.username})`}</div>
              <div className="profile--nat">{`Nationality: ${curElem.nat}`}</div>
              <div className="profile--location">{`Address: ${curElem.location.street.name}  ${curElem.location.street.number}, ${curElem.location.city}, ${curElem.location.country}`}</div>
              <div className="profile--email">{`Email: ${curElem.email}`}</div>
              <div className="profile--phone">{`Phone: ${curElem.phone}`}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://randomuser.me/api/");
  const user = await res.json();
  const results = user.results;

  return {
    props: { results },
  };
}
