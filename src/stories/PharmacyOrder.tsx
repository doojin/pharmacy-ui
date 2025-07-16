
import { Alert, Badge, Card, Tabs, Image, Table, Flex, Text, Checkbox, ActionBar, Portal, Button, Input, Stack, Icon, Separator, FileUpload, Fieldset, Field, Timeline, Avatar, Span, RadioGroup, HStack, Textarea, Switch } from "@chakra-ui/react"
import { LuCalendar, LuCheckCheck, LuClipboardList, LuCloudDownload, LuEye, LuMessageSquareText, LuPackage, LuPencil, LuTrash2 } from "react-icons/lu"
import productPhoto1 from "../assets/products/p1.webp"
import productPhoto2 from "../assets/products/p2.webp"
import productPhoto3 from "../assets/products/p3.webp"
import productPhoto4 from "../assets/products/p4.webp"
import pdfIcon from "../assets/pdf.jpg"
import avatar1 from "../assets/avatar1.jpeg"
import avatar2 from "../assets/avatar2.jpeg"
import { useState } from "react"
import { HiUpload } from "react-icons/hi"

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

  const files = [
    { 
      title: 'Контракт с поставщиком',
      filename: 'contract.pdf',
      uploaded: "11.07.2025",
      modified: "12.07.2025"
    },
    { 
      title: 'Общие рекомендации',
      filename: 'recommendations.pdf',
      uploaded: "09.07.2025",
      modified: "10.07.2025"
    }
  ];

  const indeterminate = hasSelection && selection.length < products.length

  return (
    <Card.Root>
      <Card.Body>
        <Alert.Root status="info" style={{ marginBottom: '10px' }}>
          <Alert.Indicator />
          <Alert.Title>Данный заказ был отправлен на обработку поставщику</Alert.Title>
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
                  €67,997.50
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
          <Tabs.Content value="files">
            <Stack direction="row">
              { 
                files.map(file => (
                  <Card.Root width="320px">
                    <Card.Body>
                      <Flex direction="column">
                        <Flex gap={4} align="center">
                          <Image src={pdfIcon} boxSize="50px" fit="contain" />
                          <Flex direction="column">
                            <Flex style={{ color: 'gray', fontSize: '.75rem' }} align="center">
                          <Icon style={{ marginRight: ".2rem" }}><LuCalendar/></Icon>
                          <Text>{ file.uploaded }</Text>
                        </Flex>
                            <Text>{ file.title }</Text>
                            <Text color="gray" fontSize=".85rem">{ file.filename }</Text>
                          </Flex>
                        </Flex>
                        <Flex style={{ marginTop: "1rem" }}>
                          <Flex gap={1}>
                            <Button size="xs" variant="outline" colorPalette="blue"><LuCloudDownload /> Скачать</Button>
                            <Button size="xs" variant="outline" colorPalette="red"><LuTrash2 /> Удалить</Button>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Card.Body>
                  </Card.Root>
                )) 
              }
            </Stack>
            <Separator marginTop="1rem" marginBottom="1rem" />
            <Fieldset.Root size="lg" maxW="md">
              <Stack>
                <Fieldset.Legend>Загрузить новый файл</Fieldset.Legend>
                <Alert.Root status="warning" style={{ marginBottom: '10px' }}>
                  <Alert.Indicator />
                  <Alert.Title>Внимание! Загружая новый файл вы предоставляете доступ к нему вашему поставщику.</Alert.Title>
                </Alert.Root>
              </Stack>

              <Fieldset.Content>
                <Field.Root>
                  <Field.Label>Название файла</Field.Label>
                  <Input name="name" placeholder="Заголовок" />
                </Field.Root>
              </Fieldset.Content>

              <FileUpload.Root>
                <FileUpload.HiddenInput />
                <FileUpload.Trigger asChild>
                  <Button size="sm" colorPalette="teal">
                    <HiUpload /> Выбрать файл
                  </Button>
                </FileUpload.Trigger>
              </FileUpload.Root>
            </Fieldset.Root>
          </Tabs.Content>
          <Tabs.Content value="response">
            <Timeline.Root size="lg" variant="subtle">
              <Timeline.Item>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator bg="teal.solid" color="teal.contrast">
                    <LuCheckCheck />
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title>
                    <Text>Заказ был загружен в систему</Text>
                  </Timeline.Title>
                  <Timeline.Description>
                    8 дней назад
                  </Timeline.Description>
                  <Text fontSize=".9rem">
                    Ваш поставщик проверит заказ и свяжется с вами
                  </Text>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator bg="teal.solid" color="teal.contrast">
                    <LuEye />
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content>
                  <Timeline.Title>
                    <Avatar.Root size="2xs">
                      <Avatar.Image src={avatar1} />
                    </Avatar.Root>
                    Эрика <Badge>поставщик</Badge> 
                    <Span color="fg.muted">проверил(а)</Span> ваш заказ
                  </Timeline.Title>
                  <Timeline.Description>
                    6 дней назад
                  </Timeline.Description>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator bg="teal.solid" color="teal.contrast">
                    <Icon fontSize="xs">
                      <LuPencil />
                    </Icon>
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content gap="4">
                  <Timeline.Title>
                    <Avatar.Root size="2xs">
                      <Avatar.Image src={avatar1} />
                      <Avatar.Fallback />
                    </Avatar.Root>
                    Эрика <Badge>поставщик</Badge>  <Span color="fg.muted">оставила сообщение:</Span>
                  </Timeline.Title>
                  <Timeline.Description>
                    3 дня назад
                  </Timeline.Description>
                  <Card.Root size="sm">
                    <Card.Body textStyle="sm" lineHeight="tall">
                      Добрый день! Заказ получен. Проверяю. Если будут необходима дополнительная информация, я с вами свяжусь.
                    </Card.Body>
                    <Card.Footer>
                      <Button size="xs" variant="surface" rounded="md">
                        👏 1
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator bg="teal.solid" color="teal.contrast">
                    <Icon fontSize="xs">
                      <LuPencil />
                    </Icon>
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content gap="4">
                  <Timeline.Title>
                    <Avatar.Root size="2xs">
                      <Avatar.Image src={avatar1} />
                      <Avatar.Fallback />
                    </Avatar.Root>
                    Эрика <Badge>поставщик</Badge> <Span color="fg.muted">оставила сообщение:</Span>
                  </Timeline.Title>
                  <Timeline.Description>
                    3 дня назад
                  </Timeline.Description>
                  <Card.Root size="sm">
                    <Card.Body textStyle="sm" lineHeight="tall">
                      Всё в порядке. Заказ будет отправлен в течении нескольких рабочих дней!
                    </Card.Body>
                  </Card.Root>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator>
                    <Avatar.Root size="full">
                      <Avatar.Image src={avatar2} />
                      <Avatar.Fallback />
                    </Avatar.Root>
                  </Timeline.Indicator>
                </Timeline.Connector>
                <Timeline.Content gap="4" mt="-1" w="full">
                  <Input size="sm" placeholder="Написать сообщение" />
                </Timeline.Content>
              </Timeline.Item>
            </Timeline.Root>
          </Tabs.Content>
          <Tabs.Content value="description">
            <Card.Root>
              <Card.Body>
                <Flex justify="space-between">
                  <Text color="gray" fontSize=".85rem">
                    Дата создания заказа: 
                    <Span fontWeight="bold" marginLeft="0.5rem">
                      <Icon verticalAlign="baseline"><LuCalendar /></Icon> 21.03.2025
                    </Span>
                  </Text>
                  <Text color="gray" fontSize=".85rem">
                    Последние изменения:
                    <Span fontWeight="bold" marginLeft="0.5rem">
                      <Icon verticalAlign="baseline"><LuCalendar /></Icon> 27.03.2025
                    </Span>
                  </Text>
                </Flex>
                <Field.Root marginTop="2rem">
                  <Field.Label>
                    Название заказа: <Span color="red" fontWeight="bold">*</Span>
                  </Field.Label>
                  <Input defaultValue="Заказ на партию медикаментов" />
                </Field.Root>
                <Field.Root marginTop="2rem">
                  <Field.Label>
                    Срочность заказа: <Span color="red" fontWeight="bold">*</Span>
                  </Field.Label>
                  <RadioGroup.Root defaultValue="2">
                    <HStack gap="6">
                      <RadioGroup.Item value="1">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Срочный</RadioGroup.ItemText>
                      </RadioGroup.Item>
                      <RadioGroup.Item value="2">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>Обычный</RadioGroup.ItemText>
                      </RadioGroup.Item>
                    </HStack>
                  </RadioGroup.Root>
                </Field.Root>
                <Field.Root marginTop="2rem">
                  <Field.Label>
                    Описание заказа:
                  </Field.Label>
                  <Textarea defaultValue="Здраствуйте, оставляем новый заказ на новую партию медикаментов. Мы изменили необходимое количество каждого продукта, в этом месяце оно увеличилось. Просьба проверить наличие каждого продукта и связаться с нами в случае необходимости. Спасибо." />
                </Field.Root>
                <Field.Root marginTop="2rem">
                  <Field.Label>Добавить требования к упаковке?</Field.Label>
                  <Checkbox.Root defaultChecked>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Да</Checkbox.Label>
                  </Checkbox.Root>
                  <Textarea defaultValue="Для данного заказа необходима сверхпрочная упаковка (если возможно). Спасибо." />
                </Field.Root>
                <Field.Root marginTop="2rem">
                  <Switch.Root>
                    <Switch.HiddenInput />
                    <Switch.Control />
                    <Switch.Label>Получать уведомления на почту</Switch.Label>
                  </Switch.Root>
                </Field.Root>
                <Button marginTop="2rem" colorPalette="teal">Сохранить</Button>
              </Card.Body>
            </Card.Root>
          </Tabs.Content>
        </Tabs.Root>
      </Card.Body>
    </Card.Root>
  )
}