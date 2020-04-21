import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { fetchMovie, setLoading } from "../../api/searchActions";

import Gif from "./components/Gif";

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;

    let movieInfo = (
      <Container className="container">
        <div className="row">
          <div
            style={{ background: "#07070d" }}
            className="col-md-4 card card-body"
          >
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 style={{ textAlign: "center" }} className="mb-4">
              {movie.Title}
            </h2>
            <ul style={{ color: "#FFF" }} className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div
            style={{ background: "#07070d" }}
            className="card card-body my-5 text-light"
          >
            <div className="col-md-12">
              <h3>Descrição </h3>
              {movie.Plot}
              <hr />

              <div class="btn-group">
                <a
                  className="btn btn-outline-info"
                  style={{ color: "#FFFFFF" }}
                  href={"https://www.imdb.com/title/" + movie.imdbID}
                  target="_blank"
                >
                  Detalhes
                  <i
                    style={{ marginLeft: "10px" }}
                    className="fas fa-chevron-right"
                  />
                </a>
                <Link to="/" className="btn btn-outline-warning">
                  Voltar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );

    let content = loading ? <Gif /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);

const Container = styled.div`
  margin-top: 5rem;

  h1 {
    color: #e0a800;
  }

  h2 {
    color: #e0a800;
  }

  h3 {
    color: #e0a800;
  }

  li {
    background: #000007;
  }
`;
