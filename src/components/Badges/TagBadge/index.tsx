import React from 'react'
import { Tag, TagLabel } from '@chakra-ui/react'
import { ETagBadges } from 'constants/badges'

interface BadgeProps {
  label: string[]
}

interface IBadgeData {
  label: string
  color: string
}

const getStatusBadge = (labels: string[]): IBadgeData[] => {
  const badgeData: IBadgeData[] = []

  labels.forEach((labelItem) => {
    switch (labelItem) {
      case ETagBadges.Frontend:
        badgeData.push({
          label: labelItem,
          color: 'green'
        })
        break
      case ETagBadges.Feature:
        badgeData.push({
          label: labelItem,
          color: 'blue'
        })
        break
      case ETagBadges.Bug:
        badgeData.push({
          label: labelItem,
          color: 'red'
        })
        break
      case ETagBadges.Backend:
        badgeData.push({
          label: labelItem,
          color: 'yellow'
        })
        break
      case ETagBadges.Incident:
        badgeData.push({
          label: labelItem,
          color: 'yellow'
        })
        break
      default:
        break
    }
  })

  return badgeData
}

export const TagsBadge: React.FC<BadgeProps> = ({ label }) => {
  const badgeData = getStatusBadge(label)
  const item = badgeData?.[0]
  return (
    <>
      {item ? (
        <Tag
          key={item.label}
          size="md"
          colorScheme={item.color}
          borderRadius="full"
        >
          <TagLabel>{item.label}</TagLabel>
        </Tag>
      ) : (
        <Tag size="md" colorScheme={'gray'} borderRadius="full">
          <TagLabel>Nenhuma tag</TagLabel>
        </Tag>
      )}

      {badgeData.length > 3 && <Tag size="md">+{badgeData.length - 1}</Tag>}
    </>
  )
}

export const SingleTagBadge: React.FC<BadgeProps> = ({ label }) => {
  const badgeData = getStatusBadge(label)
  const item = badgeData?.[0]
  return (
    <>
      {item ? (
        <Tag
          key={item.label}
          size="md"
          colorScheme={item.color}
          borderRadius="full"
        >
          <TagLabel>{item.label}</TagLabel>
        </Tag>
      ) : (
        <Tag size="md" colorScheme={'gray'} borderRadius="full">
          <TagLabel>Nenhuma tag</TagLabel>
        </Tag>
      )}

      {badgeData.length > 1 && <Tag size="md">+{badgeData.length - 1}</Tag>}
    </>
  )
}
