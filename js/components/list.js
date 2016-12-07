import React from 'react';

export default function List(props) {
  // console.log({props.gitList[0]})
  return (
    <div>
      {props.gitList.map((item) => {
        return (
          <div key={item.id}>
            <h3>github username: { item.owner.login}</h3>
              <li><a href= {item.html_url} > {item.name}</a></li>
              <li>description:{item.description} </li>
              <li>date created:{item.updated_at} </li>
              <li>forks:{item.forks} issues:{item.open_issues} </li>
              <li>watchers:{item.watchers} stargazers:{item.stargazers_count}</li>
          </div>
        )
      })}
      </div>
    );
};
