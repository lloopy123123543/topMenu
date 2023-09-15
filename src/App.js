import menu from "./assets/styles/menu.module.scss";
import { useState } from "react";

import Exportfile from "./assets/svg/Export_file";
import ArrowSvg from "./assets/svg/ArrowSvg";
import PrintSvg from "./assets/svg/PrintSvg";
import UndoSvg from "./assets/svg/UndoSvg";
import RedoSvg from "./assets/svg/RedoSvg";
import CutSvg from "./assets/svg/CutSvg";
import CopySvg from "./assets/svg/CopySvg";
import PasteSvg from "./assets/svg/PasteSvg";
import SelectAllSvg from "./assets/svg/SelectAllSvg";
import ImageSvg from "./assets/svg/ImageSvg";
import LinkSvg from "./assets/svg/LinkSvg";
import MediaSvg from "./assets/svg/MediaSvg";
import TableSvg from "./assets/svg/TableSvg";
import HorizontalLine from "./assets/svg/HorizontalLine";
import BoldSvg from "./assets/svg/BoldSvg";
import ItalicSvg from "./assets/svg/ItalicSvg";
import UnderLineSvg from "./assets/svg/UnderlineSvg";
import StrikethroughSvg from "./assets/svg/StrikethroughSvg";
import SuperscriptSvg from "./assets/svg/SuperScriptSvg";
import SubScriptSvg from "./assets/svg/SubScriptSvg";
import AlignLeftSvg from "./assets/svg/AlignLeftSvg";
import AlignCenterSvg from "./assets/svg/AlignCenterSvg";
import AlignRightSvg from "./assets/svg/AlignRightSvg";
import AlignJustifySvg from "./assets/svg/AlignJustifySvg";

function App() {
  const [FileIsOpen, setFileIsOpen] = useState(false);
  const [PrintSideIsOpen, setPrintSideIsOpen] = useState(false);

  const [EditIsOpen, setEditIsOpen] = useState(false);

  const [InsertIsOpen, setInsertIsOpen] = useState(false);

  const [TableSideIsOpen, setTableSideIsOpen] = useState(false);

  const [FormatIsOpen, setFormatIsOpen] = useState(false);

  const [InlineDropDown, setInlineDropDown] = useState(false);

  const [BlockDropDown, setBlockDropDown] = useState(false);

  const [AlignDropDown, setAlignDropDown] = useState(false);

  const [BlocksDropDown, setBlocksDropDown] = useState(false);

  const [FontsDropDown, setFontsDropDown] = useState(false);

  const [FontSizeBlockDown, setFontSizeBlockDown] = useState(false);

  const [AlignBlockDropDown, setAlignBlockDropDown] = useState(false);

  const [LineHeightDropDown, setLineHeightDropDown] = useState(false)
  const cols = 10;
  const rows = 10;
  const [Position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div>
      <div className={menu.top_menu}>
        {/* Вкладка Файл */}
        <div
          onMouseLeave={() => {
            setFileIsOpen(false);
          }}
          onMouseEnter={() => {
            setFileIsOpen(true);
          }}
          className={menu.top_menu__text}
        >
          <div>Файл</div>
          {/* Логика открытия файла  */}
          {FileIsOpen && (
            <div className={menu.drop_menu}>
              {/* Логика открытия подменю */}
              <div
                onMouseLeave={() => {
                  setPrintSideIsOpen(false);
                }}
                onMouseEnter={() => {
                  setPrintSideIsOpen(true);
                }}
                className={menu.drop_menu__row}
              >
                <div className={menu.contain}>
                  <Exportfile />
                  Экспорт
                </div>
                <ArrowSvg />
                {PrintSideIsOpen && (
                  <div
                    onMouseLeave={() => {
                      setPrintSideIsOpen(false);
                    }}
                    onMouseEnter={() => {
                      setPrintSideIsOpen(true);
                    }}
                    className={menu.drop_side_menu}
                  >
                    <div className={menu.drop_side_menu_item}>PDF</div>
                  </div>
                )}
              </div>

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <PrintSvg />
                  Печать
                </div>
                <div className={menu.combination_buttons}>Ctrl+P</div>
              </div>
            </div>
          )}
        </div>

        <div
          onMouseLeave={() => {
            setEditIsOpen(false);
          }}
          onMouseEnter={() => {
            setEditIsOpen(true);
          }}
          className={menu.top_menu__text}
        >
          <div>Изменить</div>
          {EditIsOpen && (
            <div className={menu.drop_menu}>
              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <UndoSvg />
                  Отменить
                </div>
                <div className={menu.combination_buttons}>Ctrl+Z</div>
              </div>
              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <RedoSvg />
                  Вернуть
                </div>
                <div className={menu.combination_buttons}>Ctrl+Y</div>
              </div>
              <div className={menu.line}></div>
              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <CutSvg />
                  Вырезать
                </div>
                <div className={menu.combination_buttons}>Ctrl+X</div>
              </div>
              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <CopySvg />
                  Копировать
                </div>
                <div className={menu.combination_buttons}>Ctrl+C</div>
              </div>
              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <PasteSvg />
                  Вставить
                </div>
                <div className={menu.combination_buttons}>Ctrl+V</div>
              </div>
              <div className={menu.line}></div>

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <SelectAllSvg />
                  Выбрать все
                </div>
                <div className={menu.combination_buttons}>Ctrl+A</div>
              </div>
            </div>
          )}
        </div>

        <div
          onMouseLeave={() => {
            setInsertIsOpen(false);
          }}
          onMouseEnter={() => {
            setInsertIsOpen(true);
          }}
          className={menu.top_menu__text}
        >
          <div>Изменить</div>
          {InsertIsOpen && (
            <div className={menu.drop_menu}>
              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <ImageSvg />
                  Изображение...
                </div>
              </div>

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <LinkSvg />
                  Ссылка...
                </div>
                <div className={menu.combination_buttons}>Ctrl+K</div>
              </div>

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <MediaSvg />
                  Медиа...
                </div>
              </div>

              <div
                onMouseLeave={() => {
                  setTableSideIsOpen(false);
                }}
                onMouseEnter={() => {
                  setTableSideIsOpen(true);
                }}
                className={menu.drop_menu__row}
              >
                <div className={menu.contain}>
                  <TableSvg />
                  Таблица
                </div>
                <ArrowSvg />
                {TableSideIsOpen && (
                  <div
                    onMouseLeave={() => {
                      setTableSideIsOpen(false);
                    }}
                    onMouseEnter={() => {
                      setTableSideIsOpen(true);
                    }}
                    className={menu.drop_side_menu}
                  >
                    <div className={menu.create_table}>
                      {Array(rows)
                        .fill(0)
                        .map((item1, indexY) => (
                          <div key={indexY}>
                            {Array(cols)
                              .fill(0)
                              .map((item2, indexX) => (
                                <button
                                  key={indexX}
                                  className={menu.create_table__cell}
                                  onMouseEnter={() =>
                                    setPosition({ x: indexX, y: indexY })
                                  }
                                  style={{
                                    backgroundColor:
                                      indexX <= Position.x &&
                                      indexY <= Position.y
                                        ? "#8eb5f1"
                                        : "",
                                  }}
                                ></button>
                              ))}
                          </div>
                        ))}
                      <div></div>
                    </div>
                    <div>
                      {Position.x + 1}х{Position.y + 1}
                    </div>
                  </div>
                )}
              </div>

              <div className={menu.line}></div>
              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <HorizontalLine />
                  Горизонтальная линия
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          onMouseLeave={() => {
            setFormatIsOpen(false);
          }}
          onMouseEnter={() => {
            setFormatIsOpen(true);
          }}
          className={menu.top_menu__text}
        >
          <div>Формат</div>
          {FormatIsOpen && (
            <div className={menu.drop_menu}>
              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <BoldSvg />
                  Жирный
                </div>
                <div className={menu.combination_buttons}>Ctrl+B</div>
              </div>

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <ItalicSvg />
                  Курсив
                </div>
                <div className={menu.combination_buttons}>Ctrl+I</div>
              </div>

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <UnderLineSvg />
                  Подчеркивание
                </div>
                <div className={menu.combination_buttons}>Ctrl+U</div>
              </div>

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <StrikethroughSvg />
                  Перечеркивание
                </div>
              </div>

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <SuperscriptSvg />
                  Надстрочный индекс
                </div>
              </div>

              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <SubScriptSvg />
                  Нижний индекс
                </div>
              </div>

              <div className={menu.line}></div>

              <div
                onMouseLeave={() => {
                  setTableSideIsOpen(false);
                }}
                onMouseEnter={() => {
                  setTableSideIsOpen(true);
                }}
                className={menu.drop_menu__row}
              >
                <div className={menu.contain}>
                  Формат
                </div>
                <ArrowSvg />
                {TableSideIsOpen && (
                  <div
                    onMouseLeave={() => {
                      setTableSideIsOpen(false);
                    }}
                    onMouseEnter={() => {
                      setTableSideIsOpen(true);
                    }}
                    className={menu.drop_side_menu}
                  >
                    <div
                      onMouseLeave={() => {
                        setPrintSideIsOpen(false);
                      }}
                      onMouseEnter={() => {
                        setPrintSideIsOpen(true);
                      }}
                      className={menu.drop_menu__row}
                    >
                      <div className={menu.contain}>Заголовки</div>
                      <ArrowSvg />
                      {PrintSideIsOpen && (
                        <div
                          onMouseLeave={() => {
                            setPrintSideIsOpen(false);
                          }}
                          onMouseEnter={() => {
                            setPrintSideIsOpen(true);
                          }}
                          className={menu.drop_side_menu}
                        >
                          <div className={menu.sub_drop_down_menu}>
                            <h1>Заголовок1</h1>
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            <h2>Заголовок2</h2>
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            <h3>Заголовок3</h3>
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            <h4>Заголовок4</h4>
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            <h5>Заголовок5</h5>
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            <h6>Заголовок6</h6>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      onMouseLeave={() => {
                        setInlineDropDown(false);
                      }}
                      onMouseEnter={() => {
                        setInlineDropDown(true);
                      }}
                      className={menu.drop_menu__row}
                    >
                      <div className={menu.contain}>Шрифт</div>
                      <ArrowSvg />

                      {InlineDropDown && (
                        <div
                          onMouseLeave={() => {
                            setInlineDropDown(false);
                          }}
                          onMouseEnter={() => {
                            setInlineDropDown(true);
                          }}
                          className={menu.drop_side_menu}
                        >
                          <div
                            className={menu.sub_drop_down_menu}
                            style={{ fontWeight: "bold" }}
                          >
                            Жирный
                          </div>
                          <div
                            className={menu.sub_drop_down_menu}
                            style={{ fontStyle: "italic" }}
                          >
                            Курсив
                          </div>
                          <div
                            className={menu.sub_drop_down_menu}
                            style={{ textDecoration: "underline" }}
                          >
                            Подчеркивание
                          </div>
                          <div
                            className={menu.sub_drop_down_menu}
                            style={{ textDecoration: "line-through" }}
                          >
                            Перечеркивание
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            Надстрочный индекс
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            Подстрочный индекс
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      onMouseLeave={() => {
                        setBlockDropDown(false);
                      }}
                      onMouseEnter={() => {
                        setBlockDropDown(true);
                      }}
                      className={menu.drop_menu__row}
                    >
                      <div className={menu.contain}>Блок</div>
                      <ArrowSvg />

                      {BlockDropDown && (
                        <div
                          onMouseLeave={() => {
                            setBlockDropDown(false);
                          }}
                          onMouseEnter={() => {
                            setBlockDropDown(true);
                          }}
                          className={menu.drop_side_menu}
                        >
                          <div className={menu.sub_drop_down_menu}>
                            <div
                              style={{ fontSize: "18px" }}
                              className={menu.contain}
                            >
                              Параграф
                            </div>
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            <div
                              style={{ fontSize: "18px" }}
                              className={menu.contain}
                            >
                              Цитата
                            </div>
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            <div
                              style={{ fontSize: "18px" }}
                              className={menu.contain}
                            >
                              Div
                            </div>
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            <div
                              style={{ fontSize: "18px" }}
                              className={menu.contain}
                            >
                              Pre
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      onMouseLeave={() => {
                        setAlignDropDown(false);
                      }}
                      onMouseEnter={() => {
                        setAlignDropDown(true);
                      }}
                      className={menu.drop_menu__row}
                    >
                      <div className={menu.contain}>Растянуть</div>
                      <ArrowSvg />

                      {AlignDropDown && (
                        <div
                          onMouseLeave={() => {
                            setAlignDropDown(false);
                          }}
                          onMouseEnter={() => {
                            setAlignDropDown(true);
                          }}
                          className={menu.drop_side_menu}
                        >
                          <div className={menu.sub_drop_down_menu}>
                            <div
                              style={{ fontSize: "18px", textAlign: "center" }}
                            >
                              По центру
                            </div>
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            <div
                              style={{ fontSize: "18px", textAlign: "start" }}
                            >
                              По левому краю
                            </div>
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            <div style={{ fontSize: "18px", textAlign: "end" }}>
                              По правому краю
                            </div>
                          </div>
                          <div className={menu.sub_drop_down_menu}>
                            <div
                              style={{ fontSize: "18px", textAlign: "justify" }}
                            >
                              По ширине
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div
                onMouseLeave={() => {
                  setBlocksDropDown(false);
                }}
                onMouseEnter={() => {
                  setBlocksDropDown(true);
                }}
                className={menu.drop_menu__row}
              >
                <div className={menu.contain}>
                  Блоки
                </div>
                <ArrowSvg />
                {BlocksDropDown && (
                  <div
                    onMouseLeave={() => {
                      setBlocksDropDown(false);
                    }}
                    onMouseEnter={() => {
                      setBlocksDropDown(true);
                    }}
                    className={menu.drop_side_menu}
                  >
                    <div
                      style={{ fontSize: "18px" }}
                      className={menu.sub_drop_down_menu}
                    >
                      Параграф
                    </div>
                    <div className={menu.line}></div>
                    <div className={menu.sub_drop_down_menu}>
                      <h1>Заголовок1</h1>
                    </div>
                    <div className={menu.sub_drop_down_menu}>
                      <h2>Заголовок2</h2>
                    </div>
                    <div className={menu.sub_drop_down_menu}>
                      <h3>Заголовок3</h3>
                    </div>
                    <div className={menu.sub_drop_down_menu}>
                      <h4>Заголовок4</h4>
                    </div>
                    <div className={menu.sub_drop_down_menu}>
                      <h5>Заголовок5</h5>
                    </div>
                    <div className={menu.sub_drop_down_menu}>
                      <h6>Заголовок6</h6>
                    </div>
                    <div className={menu.line}></div>
                    <div
                      style={{ fontSize: "18px" }}
                      className={menu.sub_drop_down_menu}
                    >
                      Предформатированные
                    </div>
                  </div>
                )}
              </div>

              <div
                onMouseLeave={() => {
                  setFontsDropDown(false);
                }}
                onMouseEnter={() => {
                  setFontsDropDown(true);
                }}
                className={menu.drop_menu__row}
              >
                <div className={menu.contain}>
                  Шрифты
                </div>
                <ArrowSvg />
                {FontsDropDown && (
                  <div
                    onMouseLeave={() => {
                      setFontsDropDown(false);
                    }}
                    onMouseEnter={() => {
                      setFontsDropDown(true);
                    }}
                    className={menu.drop_side_menu}
                    style={{
                      overflowX: "hidden",
                      overflowY: "scroll",
                      maxHeight: "400px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "Andale Mono",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Andale Mono
                    </div>
                    <div
                      style={{
                        fontFamily: "Arial",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Arial
                    </div>
                    <div
                      style={{
                        fontFamily: "Arial Black",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Arial Black
                    </div>
                    <div
                      style={{
                        fontFamily: "Book Antiqua",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Book Antiqua
                    </div>
                    <div
                      style={{
                        fontFamily: "Comic Sans MS",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Comic Sans MS
                    </div>
                    <div
                      style={{
                        fontFamily: "Courier New",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Courier New
                    </div>
                    <div
                      style={{
                        fontFamily: "Georgia",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Georgia
                    </div>
                    <div
                      style={{
                        fontFamily: "Helvetica",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Helvetica
                    </div>
                    <div
                      style={{
                        fontFamily: "Impact",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Impact
                    </div>
                    <div
                      style={{
                        fontFamily: "Tahoma",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Tahoma
                    </div>
                    <div
                      style={{
                        fontFamily: "Terminal",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Terminal
                    </div>
                    <div
                      style={{
                        fontFamily: "Times New Roman",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Times New Roman
                    </div>
                    <div
                      style={{
                        fontFamily: "Trebuchet MS",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Trebuchet MS
                    </div>
                    <div
                      style={{
                        fontFamily: "Verdana",
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Verdana
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Webdings
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      className={menu.sub_drop_down_menu}
                    >
                      Wingdings
                    </div>
                  </div>
                )}
              </div>

              <div
                onMouseLeave={() => {
                  setFontSizeBlockDown(false);
                }}
                onMouseEnter={() => {
                  setFontSizeBlockDown(true);
                }}
                className={menu.drop_menu__row}
              >
                <div className={menu.contain}>
                  Размер шрифта
                </div>
                <ArrowSvg />
                {FontSizeBlockDown && (
                  <div
                    onMouseLeave={() => {
                      setFontSizeBlockDown(false);
                    }}
                    onMouseEnter={() => {
                      setFontSizeBlockDown(true);
                    }}
                    className={menu.drop_side_menu}
                  >
                    <div className={menu.sub_drop_down_menuV2}>8pt</div>
                    <div className={menu.sub_drop_down_menuV2}>10pt</div>
                    <div className={menu.sub_drop_down_menuV2}>12pt</div>
                    <div className={menu.sub_drop_down_menuV2}>14pt</div>
                    <div className={menu.sub_drop_down_menuV2}>18pt</div>
                    <div className={menu.sub_drop_down_menuV2}>24pt</div>
                    <div className={menu.sub_drop_down_menuV2}>36pt</div>
                  </div>
                )}
              </div>

              <div
                onMouseLeave={() => {
                  setAlignBlockDropDown(false);
                }}
                onMouseEnter={() => {
                  setAlignBlockDropDown(true);
                }}
                className={menu.drop_menu__row}
              >
                <div className={menu.contain}>
                  Абзац
                </div>
                <ArrowSvg />
                {AlignBlockDropDown && (
                  <div
                    onMouseLeave={() => {
                      setAlignBlockDropDown(false);
                    }}
                    onMouseEnter={() => {
                      setAlignBlockDropDown(true);
                    }}
                    className={menu.drop_side_menu}
                  >
                    <div className={menu.drop_menu__row}>
                      <div className={menu.contain}>
                        <AlignLeftSvg />
                        По левому
                      </div>
                    </div>

                    <div className={menu.drop_menu__row}>
                      <div className={menu.contain}>
                        <AlignCenterSvg />
                        По центру
                      </div>
                    </div>

                    <div className={menu.drop_menu__row}>
                      <div className={menu.contain}>
                        <AlignRightSvg />
                        По правому
                      </div>
                    </div>

                    <div className={menu.drop_menu__row}>
                      <div className={menu.contain}>
                        <AlignJustifySvg />
                        По ширине
                      </div>
                    </div>

                  </div>
                )}
              </div>

              <div
                onMouseLeave={() => {
                  setLineHeightDropDown(false);
                }}
                onMouseEnter={() => {
                  setLineHeightDropDown(true);
                }}
                className={menu.drop_menu__row}
              >
                <div className={menu.contain}>
                  Высота строки
                </div>
                <ArrowSvg />
                {LineHeightDropDown && (
                  <div
                    onMouseLeave={() => {
                      setLineHeightDropDown(false);
                    }}
                    onMouseEnter={() => {
                      setLineHeightDropDown(true);
                    }}
                    className={menu.drop_side_menu}
                  >
                    <div className={menu.drop_menu__row}>
                      <div className={menu.contain}>
                        1
                      </div>
                    </div>

                    <div className={menu.drop_menu__row}>
                      <div className={menu.contain}>
                        1.1
                      </div>
                    </div>

                    <div className={menu.drop_menu__row}>
                      <div className={menu.contain}>
                        1.2
                      </div>
                    </div>

                    <div className={menu.drop_menu__row}>
                      <div className={menu.contain}>
                        1.3
                      </div>
                    </div>
                    <div className={menu.drop_menu__row}>
                      <div className={menu.contain}>
                        1.4
                      </div>
                    </div>
                    <div className={menu.drop_menu__row}>
                      <div className={menu.contain}>
                        1.5
                      </div>
                    </div>
                    <div className={menu.drop_menu__row}>
                      <div className={menu.contain}>
                        2
                      </div>
                    </div>

                  </div>
                )}
              </div>

              <div className={menu.line}></div>
              <div className={menu.drop_menu__row}>
                <div className={menu.contain}>
                  <HorizontalLine />
                  Отчистить форматирование
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={menu.top_menu__text}>Просмотр</div>
      </div>
    </div>
  );
}

export default App;
