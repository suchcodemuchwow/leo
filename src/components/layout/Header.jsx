import { useSelector } from "react-redux";
import {
  createSearchParams,
  Link,
  NavLink,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { Icon } from "../common/Icon";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { starredIds } = useSelector((state) => state.starred);
  const { watchLaterIds } = useSelector((state) => state.watchLater);
  const hasStarred = starredIds.length > 0;
  const hasWatchLater = watchLaterIds.length > 0;

  const searchQuery = searchParams.get("search");

  const onSearchChange = (e) => {
    navigate({
      pathname: "",
      search: createSearchParams({ search: e.target.value }).toString(),
    });
  };

  return (
    <header>
      <Link to="/" data-testid="home">
        <Icon iconName="film" width="1.2rem" height="1.2rem" />
      </Link>

      <nav>
        <div className="input-group rounded">
          <input
            value={searchQuery || ""}
            onChange={onSearchChange}
            type="search"
            data-testid="search-movies"
            className="form-control rounded"
            placeholder="Search movies..."
            aria-label="Search movies"
            aria-describedby="search-addon"
          />
        </div>
        <NavLink
          to="/starred"
          data-testid="nav-starred"
          className="nav-starred"
        >
          <Icon iconName={hasStarred ? "star-fill" : "star"} />
          {hasStarred && <sup className="star-number">{starredIds.length}</sup>}
        </NavLink>
        <NavLink
          to="/watch-later"
          className="nav-fav"
          data-testid="nav-watch-later"
        >
          <Icon iconName={`bookmark-star${hasWatchLater && "-fill"}`} />
        </NavLink>
      </nav>
    </header>
  );
};

export { Header };
