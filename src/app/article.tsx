import React from 'react'
import Typography from '@components/ui/typography'

interface ArticleProps {
  element: React.ReactNode
}

const Article: React.FC<ArticleProps> = ({
  element
}) => {
  return (
    <div
      className="bg-white rounded-md p-10 w-full flex-shrink-0 md:items-start
        items-center"
    >
      {element}
    </div>
  )
}

export default Article
