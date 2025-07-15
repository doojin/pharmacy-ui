
import { Alert, Badge, Card, Tabs } from "@chakra-ui/react"
import { LuClipboardList, LuCloudDownload, LuMessageSquareText, LuPackage } from "react-icons/lu"

export const TestComponent = () => {
  return (
    <Card.Root>
      <Card.Body>
        <Alert.Root status="info" style={{ marginBottom: '10px' }}>
          <Alert.Indicator />
          <Alert.Title>Ваш заказ был отправлен на обработку поставщику</Alert.Title>
        </Alert.Root>
        <Tabs.Root variant="enclosed" defaultValue="order-list">
          <Tabs.List>
            <Tabs.Trigger value="description">
              <LuPackage />
              Описание заказа
            </Tabs.Trigger>
            <Tabs.Trigger value="order-list">
              <LuClipboardList />
              Детали заказа
            </Tabs.Trigger>
            <Tabs.Trigger value="files">
              <LuCloudDownload />
              Приложения
              <Badge variant="solid" size="sm">2</Badge>
            </Tabs.Trigger>
            <Tabs.Trigger value="response">
              <LuMessageSquareText />
              Ответы поставщика
              <Badge variant="solid" size="sm">3</Badge>
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </Card.Body>
    </Card.Root>
  )
}