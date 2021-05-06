import React from 'react';

const UserDetail = ({ bio, login, company, blog, getCreatedAt }) => {
  return (
    <div className="user-details">
      <ul>
        {bio && (
          <li>
            <h4>descrição</h4>
            <p>{bio}</p>
          </li>
        )}
        <li>
          {login && (
            <>
              <strong>username</strong>
              <p>{login}</p>
            </>
          )}
        </li>
        <li>
          {company && (
            <>
              <strong>empresa</strong>
              <p>{company}</p>
            </>
          )}
        </li>
        {blog && (
          <li>
            <>
              <strong>site</strong>

              {blog.substring(0, 3) === 'www' ? (
                <a
                  className="resetMarginPadding"
                  target="_blank"
                  href={blog}
                  rel="noreferrer"
                >
                  {blog}
                </a>
              ) : (
                <p>
                  <a
                    className="resetMarginPadding"
                    target="_blank"
                    rel="noreferrer"
                    href={blog}
                  >
                    {blog}
                  </a>
                </p>
              )}
            </>
          </li>
        )}
        <li>
          {login && (
            <>
              <strong>criada_em </strong>
              <p>{getCreatedAt()}</p>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default UserDetail;
