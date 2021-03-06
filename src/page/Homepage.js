import UsersImages from "../containers/UsersImages";
import { Link } from "react-router-dom";
import { Card, CardImg } from "reactstrap";

const Homepage = ({ users }) => {
  return users.map((user) => {
    return (
      <div key={user.id}>
        <div className="container-fluid">
          <div className="row mb-2">
            <Card
              className="col-12 col-sm-2 col-lg-2 col-md-2 d-flex align-items-center p-2"
              style={{
                width: "25vw",
                margin: "0px",
                borderStyle: "none",
                backgroundColor: "#B1A296",
                textAlign: "center",
              }}
            >
              <Link
                className="p-2"
                to={`/users/${user.id}`}
                style={{color: "white", fontSize: "25px"}}
              >
                @{user.username}
              </Link>

              <CardImg
                className="rounded-circle"
                top
                width="100%"
                src={user.profileImage}
                alt="Card image cap"
                style={{
                  width: "80%",
                  border: "4px solid white",
                  marginTop: "15px",
                }}
              />

              <a
                style={{ width: "80%", color: "white" }}
                className="btn btn-info mt-5 "
                href={`/users/${user.id}`}
                type="submit"
              >
                Visit Profile
              </a>
            </Card>
            <div
              className="col-12 col-sm-10 col-lg-10 col-md-10 p-3"
              style={{ backgroundColor: "	lightgrey" }}
            >
              <UsersImages userId={user.id} />
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Homepage;
