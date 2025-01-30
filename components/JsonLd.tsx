import React from 'react'

interface JsonLdProps {
  data: Record<string, any>
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)

