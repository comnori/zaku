import Button from './Button'
import Input from './Input'
import useSubscribe from '../../../../../../../hooks/useSubscribe'
import editorStore from '../../../../../../../store/editorStore'

export default function SettingPanel() {
  const [editorState] = useSubscribe(editorStore)

  const component = editorState.components.find(
    item => editorState.key === item.key
  )

  return (
    <>
      <div>
        {component && component.type === 'AntdButton' && <Button></Button>}
      </div>
      <div>{component && component.type === 'AntInput' && <Input></Input>}</div>
    </>
  )
}
