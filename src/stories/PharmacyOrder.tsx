
import { Alert, Badge, Card, Tabs, Image, Table, Flex, Text, Checkbox, ActionBar, Portal, Button, Input } from "@chakra-ui/react"
import { LuClipboardList, LuCloudDownload, LuMessageSquareText, LuPackage, LuTrash2 } from "react-icons/lu"
import productPhoto1 from "../assets/products/p1.webp"
import productPhoto2 from "../assets/products/p2.webp"
import productPhoto3 from "../assets/products/p3.webp"
import productPhoto4 from "../assets/products/p4.webp"
import { useState } from "react"

export const TestComponent = () => {
  const [selection, setSelection] = useState<string[]>([])
  const hasSelection = selection.length > 0

  const products = [
    {
      name: 'Seranexin',
      id: 'RX-843291',
      photo: productPhoto1,
      price: 120.99,
      count: 200
    },
    {
      name: 'Cardiovetra',
      id: 'RX-592017',
      photo: productPhoto2,
      price: 18.50,
      count: 500
    },
    {
      name: 'Metralorin',
      id: 'RX-104883',
      photo: productPhoto3,
      price: 25.00,
      count: 1300
    },
    {
      name: 'Lumirexol',
      id: 'RX-716204',
      photo: productPhoto4,
      price: 40.99,
      count: 50
    }
  ];

  const indeterminate = hasSelection && selection.length < products.length

  return (
    <Card.Root>
      <Card.Body>
        <Alert.Root status="info" style={{ marginBottom: '10px' }}>
          <Alert.Indicator />
          <Alert.Title>Ваш заказ был отправлен на обработку поставщику</Alert.Title>
        </Alert.Root>
        <Tabs.Root fitted variant="enclosed" defaultValue="order-list">
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
          <Tabs.Content value="order-list">
            <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>
                  <Checkbox.Root
                    size="sm"
                    top="0.5"
                    aria-label="Select all rows"
                    checked={indeterminate ? "indeterminate" : selection.length > 0}
                    onCheckedChange={(changes) => {
                      setSelection(
                        changes.checked ? products.map((product) => product.id) : [],
                      )
                    }}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                  </Checkbox.Root>
                </Table.ColumnHeader>
                <Table.ColumnHeader>Продукт</Table.ColumnHeader>
                <Table.ColumnHeader>Категория</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Цена (шт.)</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Количество</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                products.map(product => (
                  <Table.Row data-selected={selection.includes(product.id) ? "" : undefined}>
                    <Table.Cell>
                      <Checkbox.Root
                        size="sm"
                        top="0.5"
                        aria-label="Select row"
                        checked={selection.includes(product.id)}
                        onCheckedChange={(changes) => {
                          setSelection((prev) =>
                            changes.checked
                              ? [...prev, product.id]
                              : selection.filter((id) => id !== product.id),
                          )
                        }}
                      >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                      </Checkbox.Root>
                    </Table.Cell>
                    <Table.Cell>
                      <Flex gap={4}>
                        <Image src={ product.photo }
                          boxSize="80px"
                          rounded={15}
                          fit="cover" />
                        <Flex direction="column" justify="center" gap={2}>
                          <Text fontWeight="bold" fontSize="1rem">{ product.name }</Text>
                          <Text color="gray">Product ID: { product.id }</Text>
                        </Flex>
                      </Flex>
                    </Table.Cell>
                    <Table.Cell>Медикаменты</Table.Cell>
                    <Table.Cell textAlign="end">€{ product.price.toFixed(2) }</Table.Cell>
                    <Table.Cell textAlign="end">
                      <Input width="80px" textAlign="center" rounded={50} value={product.count}/>
                    </Table.Cell>
                  </Table.Row>
                ))
              }
            </Table.Body>
          </Table.Root>
          <div style={{ marginTop: '1rem' }}>
            <Flex align="center" justify="space-between">
              <div>
                <Button colorPalette="green">Сохранить</Button>
              </div>
              <div>
                Общая сумма заказа: 
                <Text display="inline" fontWeight="bold" style={{ marginLeft: 5 }}>
                  €{ products.map(product => product.price).reduce((sum, curr) => {
                  sum += curr
                  return sum
                }, 0).toFixed(2) }
                </Text>
              </div>
            </Flex>
              
          </div>
          <ActionBar.Root open={hasSelection}>
            <Portal>
              <ActionBar.Positioner>
                <ActionBar.Content>
                  <ActionBar.SelectionTrigger>
                    Выбрано: <Text fontWeight="bold">{selection.length}</Text>
                  </ActionBar.SelectionTrigger>
                  <ActionBar.Separator />
                  <Button colorPalette="red" size="sm">
                    <LuTrash2 /> Удалить
                  </Button>
                </ActionBar.Content>
              </ActionBar.Positioner>
            </Portal>
          </ActionBar.Root>
          </Tabs.Content>
        </Tabs.Root>
      </Card.Body>
    </Card.Root>
  )
}