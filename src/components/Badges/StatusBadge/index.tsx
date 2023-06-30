import React from 'react'
import { Tag, TagLabel } from '@chakra-ui/react'
import { EStatusBadges } from 'constants/badges'

interface BadgeProps {
  id: number
}

interface IBadgeData {
  label: string
  color: string
}

const getStatusBadge = (id: number): IBadgeData | null => {
  switch (id) {
    case EStatusBadges.InProgress:
      return {
        label: 'Em andamento',
        color: 'green'
      }
    case EStatusBadges.Completed:
      return {
        label: 'Concluído',
        color: 'blue'
      }
    default:
      return null
  }
}

export const StatusBadge: React.FC<BadgeProps> = ({ id }) => {
  const badgeData = getStatusBadge(id)
  return (
    <Tag size="md" colorScheme={badgeData?.color} borderRadius="full">
      <TagLabel>{badgeData?.label}</TagLabel>
    </Tag>
  )
}
