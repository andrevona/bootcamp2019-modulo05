import React from 'react';

export default function Respository({ match }) {
  return <h1>Repo: {decodeURIComponent(match.params.repository)}</h1>;
}
