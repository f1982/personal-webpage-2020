import { Location } from 'history'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Prompt } from 'react-router-dom'

interface WarningDialogProps {
  open: boolean
  titleText: string
  contentText: string
  cancelButtonText: string
  confirmButtonText: string
  onCancel: Function
  onConfirm: Function
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 9999;
`

const WarningDialog = ({
  open,
  titleText,
  contentText,
  cancelButtonText,
  confirmButtonText,
  onCancel,
  onConfirm
}: WarningDialogProps) => {
  return (
    <Wrapper hidden={!open}>
      <h1>{titleText}</h1>
      <p>{contentText}</p>
      <button
        onClick={() => {
          onCancel()
        }}>
        {cancelButtonText}
      </button>
      <button
        onClick={() => {
          onConfirm()
        }}>
        {confirmButtonText}
      </button>
    </Wrapper>
  )
}

interface Props {
  when?: boolean | undefined
  navigate: (path: string) => void
  shouldBlockNavigation: (location: Location) => boolean
}
const RouteLeavingGuard = ({
  when,
  navigate,
  shouldBlockNavigation
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [lastLocation, setLastLocation] = useState<Location | null>(null)
  const [confirmedNavigation, setConfirmedNavigation] = useState(false)
  const closeModal = () => {
    setModalVisible(false)
  }
  const handleBlockedNavigation = (nextLocation: Location): boolean => {
    if (!confirmedNavigation && shouldBlockNavigation(nextLocation)) {
      setModalVisible(true)
      setLastLocation(nextLocation)
      return false
    }
    return true
  }
  const handleConfirmNavigationClick = () => {
    setModalVisible(false)
    setConfirmedNavigation(true)
  }
  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      // Navigate to the previous blocked location with your navigate function
      navigate(lastLocation.pathname)
    }
  }, [confirmedNavigation, lastLocation])
  return (
    <>
      <Prompt when={when} message={handleBlockedNavigation} />
      {/* Your own alert/dialog/modal component */}
      <WarningDialog
        open={modalVisible}
        titleText='Close without saving?'
        contentText='You have unsaved changes. Are you sure you want to leave this page without saving?'
        cancelButtonText='DISMISS'
        confirmButtonText='CONFIRM'
        onCancel={closeModal}
        onConfirm={handleConfirmNavigationClick}
      />
    </>
  )
}
export default RouteLeavingGuard
