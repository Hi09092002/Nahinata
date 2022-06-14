import {
  CheckboxGroup,
  Checkbox,
  Stack,
  Radio,
  RadioGroup,
  Button,
  List,
  ListItem,
  ListIcon,
  Divider,
  Text,
  Alert,
  AlertIcon,
  useToast,
  Image,
  Box,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
  Flex,
  Spacer,
} from '@chakra-ui/react'
import {
  CheckCircleIcon,
  InfoIcon,
  QuestionIcon,
  WarningIcon,
} from '@chakra-ui/icons'
import '../App.css'
import { SearchWord } from './SearchWord'
import { useState } from 'react'
import jsCookie from 'js-cookie'
import titleImg from '../img/titleImg.png'
export const Setting = ({
  questionList,
  showSettingDetail,
  updateQuestionOrder,
  toggleQuestionRange,
  updateQuestionMode,
  selectQuestionList,
  nextQuestion,
  makeSetting,
  addWordFilter,
  deleteWordFilter,
  updateAllSettings,
  loadHistory,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const settingDetail = showSettingDetail()
  const [checkMsg, setCheckMsg] = useState()
  const toast = useToast()
  const checkSelection = () => {
    let selectedQuestionList = []
    questionList.forEach((group) => {
      if (settingDetail.questionRange.indexOf(group.groupTag) === -1) {
        console.log('この文章が2回表示される')
        return
      }
      group.groupContents.forEach((question) => {
        let flag = 0
        if (settingDetail.wordFilter.length === 0) {
          flag = 1
        }
        settingDetail.wordFilter.forEach((word) => {
          if (question.detailInfo && question.detailInfo.indexOf(word) > -1)
            flag = 1
          if (
            question.questionSentence &&
            question.questionSentence.indexOf(word) > -1
          )
            flag = 1
          if (question.answer && question.answer.indexOf(word) > -1) flag = 1
          if (question.commentary && question.commentary.indexOf(word) > -1)
            flag = 1
          if (
            question.choices &&
            question.choices.every((choice) => choice.indexOf(word) === -1) ===
              false
          )
            flag = 1
        })
        if (flag === 0) return
        selectedQuestionList.push(question)
      })
    })
    console.log('selectedQuestionList:')
    console.log(selectedQuestionList)
    if (
      settingDetail.wordFilter.length > 0 &&
      selectedQuestionList.length > 0
    ) {
      setCheckMsg('現在' + selectedQuestionList.length + '件の質問を選択中')
    } else if (selectedQuestionList.length === 0) {
      setCheckMsg('条件を満たした質問が存在しません')
    } else {
      setCheckMsg()
      console.log('1回だけ表示される')
    }
  }
  // ここからCookieを使った設定の引継ぎ
  let savedSettingDetail = showSettingDetail()
  let getCookiesFlag = 0
  // let isLoaded
  jsCookie.set('locale', 'ja-JP')
  if (jsCookie.get('questionOrder')) {
    savedSettingDetail.questionOrder = jsCookie.get('questionOrder')
    getCookiesFlag = 1
  }

  if (jsCookie.get('questionRange')) {
    savedSettingDetail.questionRange = jsCookie.get('questionRange').split(',')
    getCookiesFlag = 1
  }
  if (jsCookie.get('wordFilter')) {
    savedSettingDetail.wordFilter = jsCookie.get('wordFilter').split(',')
    getCookiesFlag = 1
  }
  // if (isLoaded !== true && getCookiesFlag === 1) {
  //   console.log('savedSettingDetail:' + isLoaded + getCookiesFlag)
  //   toast({
  //     title: '前回の設定を引継ぎました',
  //     position: 'top',
  //     status: 'info',
  //     isClosable: true,
  //   })
  //   // updateAllSettings(savedSettingDetail)
  //   isLoaded = true
  // }
  const saveSetting = (settingDetail) => {
    jsCookie.set('questionOrder', settingDetail.questionOrder)
    jsCookie.set('questionRange', settingDetail.questionRange)
    jsCookie.set('wordFilter', settingDetail.wordFilter)
    console.log(jsCookie.get())
  }
  let remainingNum = 0
  if (jsCookie.get('history')) {
    remainingNum = jsCookie.get('history').split(',').length - 1
    console.log(jsCookie.get('history').split(','))
  }
  return (
    <>
      <Box boxSize="sm" transitionDelay="3s" className="Headline1" mb={6}>
        <Flex pr={4}>
          <Spacer />
          <Button
            onClick={onOpen}
            colorScheme="blackAlpha"
            variant={'solid'}
            // borderWidth="2px"
            // borderColor="white"
            m={0}
            w={'40px'}
            h="40px"
            mt={4}
            mb={'-80px'}
          >
            <InfoIcon />
          </Button>
        </Flex>

        <Image src={titleImg} alt="TitleImage" m={0} p="0" mb={-14} />
        <Flex ml={4} mr="4">
          {checkMsg === '条件を満たした質問が存在しません' ? (
            <Button
              colorScheme="teal"
              variant="variant"
              // borderRadius={'full'}
              borderWidth="2px"
              borderColor="white"
              isDisabled
            >
              はじめから
            </Button>
          ) : (
            <Button
              bgColor={'blackAlpha.600'}
              color={'white'}
              // borderRadius={'full'}
              borderWidth="2px"
              borderColor="whiteAlpha"
              variant="solid"
              onClick={() => {
                updateQuestionMode('training')
                selectQuestionList(questionList, settingDetail)
                nextQuestion(settingDetail)
                makeSetting()
                saveSetting(settingDetail)
              }}
            >
              はじめから
            </Button>
          )}
          <Spacer />

          {jsCookie.get('history') &&
          jsCookie.get('history').split(',').length > 1 ? (
            <Button
              bgGradient="linear(to bottom right, green.300, green.800)"
              color={'white'}
              variant="solid"
              // borderRadius={'full'}
              borderWidth="2px"
              borderColor="whiteAlpha"
              opacity={'0.9'}
              onClick={() => {
                // updateQuestionMode('practice')
                loadHistory(jsCookie.get('history'), questionList)
                updateAllSettings({
                  isSet: false,
                  mode: 'training',
                  questionOrder: jsCookie.get('questionOrder'),
                  questionRange: jsCookie.get('questionRange').split(','),
                  wordFilter: jsCookie.get('wordFilter').split(','),
                })
                nextQuestion(settingDetail)
                makeSetting()
                saveSetting(settingDetail)
              }}
            >
              続きから(あと{remainingNum}問)
            </Button>
          ) : (
            <Button
              bgGradient="linear(to bottom right, green.300, green.800)"
              color={'white'}
              variant="solid"
              onClick={() => updateQuestionMode('practice')}
              isDisabled
              // borderRadius={'full'}
            >
              続きから再開
            </Button>
          )}
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={'green.50'}>
          <ModalHeader>TIPS</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3} p={0} bgColor="green.50" fontSize={'sm'}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                スマートフォン・PC・タブレットでどこでも試験対策が可能！
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                出題パターンや出題範囲・キーワードを自由に設定して、自分好みの問題集を作ろう
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                途中でアプリを消してしまっても、続きから再開できるので安心
              </ListItem>
              <ListItem>
                <ListIcon as={WarningIcon} color="green.500" />
                問題は一部機械作成されているので誤字があり、解答解説は間違っている可能性があります。
              </ListItem>
              <ListItem>
                <ListIcon as={QuestionIcon} color="green.500" />
                その他説明不足・バグ等あれば本人まで。
              </ListItem>
            </List>
            <Divider orientation="horizontal" mt={3} mb="1" />
            <Text>アップデート履歴</Text>
            <Text fontSize={'sm'}>06-01_Ver0.8-重くなりすぎないように改善</Text>
            <Text fontSize={'sm'}>05-25_Ver0.7-”続きから再開”機能を仮実装</Text>
            <Text fontSize={'sm'}>
              05-22_Ver0.6-cookieで設定を引継げるように
            </Text>
            <Text fontSize={'sm'}>
              05-09_Ver0.4-”キーワード絞込み”機能を実装
            </Text>
            <Text fontSize={'sm'}>2022-05-05_Ver0.1-仮リリース</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {checkMsg === '条件を満たした質問が存在しません' ? (
        <Alert status="error" fontWeight={'semibold'}>
          <AlertIcon />
          {checkMsg}
        </Alert>
      ) : (
        <>
          {checkMsg ? (
            <Alert status="success">
              <AlertIcon />
              {checkMsg}
            </Alert>
          ) : (
            <></>
          )}
        </>
      )}

      <RadioGroup defaultValue={settingDetail.questionOrder}>
        <Stack spacing={5} direction="row" p={2}>
          <Radio
            colorScheme="red"
            value="random"
            onChange={() => {
              updateQuestionOrder('random')
              saveSetting(settingDetail)
            }}
          >
            ランダム出題
          </Radio>
          <Radio
            colorScheme="green"
            value="ascend"
            onChange={() => {
              updateQuestionOrder('ascend')
              saveSetting(settingDetail)
            }}
          >
            順番通り出題
          </Radio>
        </Stack>
      </RadioGroup>
      <CheckboxGroup
        colorScheme="green"
        defaultValue={settingDetail.questionRange}
      >
        <Stack
          spacing={[2, 4]}
          direction={['column', 'row']}
          bg="blackAlpha.100"
          p={2}
          mb="5"
        >
          {questionList.map((group, index) => (
            <Checkbox
              value={group.groupTag}
              key={index}
              onChange={() => {
                toggleQuestionRange(group.groupTag)
                checkSelection()
                saveSetting(settingDetail)
              }}
            >
              {group.groupTag}(
              {group.groupContents ? group.groupContents.length : '0'}問)
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      <SearchWord
        showSettingDetail={showSettingDetail}
        addWordFilter={addWordFilter}
        deleteWordFilter={deleteWordFilter}
        questionList={questionList}
        checkSelection={checkSelection}
        saveSetting={saveSetting}
      />
      <Divider orientation="horizontal" />
      <Text fontSize="xs" textColor={'blackAlpha.500'} ml="4">
        ©2022- IgaTatApps
      </Text>
    </>
  )
}
