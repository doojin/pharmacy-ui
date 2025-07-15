
import { Badge, Card, Tabs } from "@chakra-ui/react"
import { FaInfo } from "react-icons/fa"
import { LuClipboardList, LuCloudDownload, LuFileDown, LuInfo, LuMessageSquareText, LuPackage } from "react-icons/lu"
import { Md3dRotation, MdOutlineDescription } from "react-icons/md"

export const TestComponent = () => {
  return (
    <Card.Root>
      <Card.Body>
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