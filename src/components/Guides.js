import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Guides({ data }) {
  const LinkType = ({ guide, children }) =>
    guide.slug ? (
      <Link key={guide.id} to={guide.slug}>
        {children}
      </Link>
    ) : (
      <a key={guide.id} href={guide.path}>
        {children}
      </a>
    )

  return (
    <div className="guides front-page">
      {data.map((guide) => {
        return (
          <div className="guide">
          <div>
          <LinkType key={guide.id} guide={guide}>
            {guide.staticThumbnail ? (
              <img
                src={guide.staticThumbnail}
                alt={guide.id}
                height="50"
                width="50"
              />
            ) : (
              <Img fixed={guide.thumbnail} />
            )}
          </LinkType>
          </div>

          <div>
          <LinkType key={guide.id} guide={guide}>
            <h2>{guide.title}</h2>
            {guide.description && <p className="description">{guide.description}</p>}
          </LinkType>
          </div>
          </div>
        )
      })}
    </div>
  )
}
